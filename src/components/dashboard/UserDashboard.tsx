import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../store/authStore';

interface Order {
  id: string;
  service: string;
  status: string;
  technician: string;
  created_at: string;
  price: number;
}

export default function UserDashboard() {
  const user = useAuthStore((state) => state.user);
  const [orders, setOrders] = useState<Order[]>([]);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetchUserData();
    fetchOrders();
  }, []);

  const fetchUserData = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user?.id)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
    } else {
      setProfile(data);
    }
  };

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', user?.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching orders:', error);
    } else {
      setOrders(data);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            {profile && (
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">Name:</span> {profile.full_name}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {user?.email}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {profile.phone}
                </p>
                <p>
                  <span className="font-semibold">Address:</span>{' '}
                  {profile.address}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
            <div className="space-y-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{order.service}</h3>
                      <p className="text-sm text-gray-600">
                        Technician: {order.technician}
                      </p>
                      <p className="text-sm text-gray-600">
                        Date:{' '}
                        {new Date(order.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                        {order.status}
                      </span>
                      <p className="mt-2 font-semibold">₹{order.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}