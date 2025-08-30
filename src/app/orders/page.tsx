"use client";

import React from 'react';
import { Trash2, ShoppingBag, MapPin, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function OrdersPage() {
  const router = useRouter();
  
  const orders = [
    {
      id: 1,
      restaurant: "Kichi Kichi",
      image: "/images/kichikichi.jpg",
      items: 2,
      price: "A$20.25",
      date: "29 Aug",
      status: "Completed"
    },
    {
      id: 2,
      restaurant: "John's Pizzeria",
      image: "/images/johnspizzeria.jpg",
      items: 1,
      price: "A$8.95",
      date: "25 Aug",
      status: "Completed"
    },
    {
      id: 3,
      restaurant: "Kebab Halal",
      image: "/images/halalkebab.jpg",
      items: 3,
      price: "A$10.43",
      date: "22 Aug",
      status: "Completed"
    },
    {
      id: 4,
      restaurant: "Pure Veg Rasoi",
      image: "/images/purevegrasoi.jpg",
      items: 2,
      price: "A$12.43",
      date: "18 Aug",
      status: "Completed"
    },
    {
      id: 5,
      restaurant: "SYNCS BBQ",
      image: "/images/SYNCSBBQ.jpg",
      items: 4,
      price: "A$20.78",
      date: "13 Aug",
      status: "Completed"
    },
    {
      id: 6,
      restaurant: "Chai ki Tapri",
      image: "/images/dollykitapri.jpg",
      items: 2,
      price: "A$5.13",
      date: "9 Aug",
      status: "Completed"
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: 'white',
      width: '100%',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.25rem 1rem 0.75rem 1rem'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'black',
          margin: 0,
          marginBottom: '0.25rem'
        }}>Orders</h1>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.5rem'
        }}>
          <Trash2 style={{ width: '1.125rem', height: '1.125rem', color: 'black' }} />
          <span style={{
            fontSize: '0.95rem',
            color: 'black'
          }}>Past Orders</span>
        </div>
        
        <div style={{
          height: '1px',
          backgroundColor: 'black',
          width: '100%'
        }}></div>
      </div>

      {/* Orders List - Scrollable */}
      <div 
        className="scrollable-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '0 1rem',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollPaddingBottom: '6rem'
        }}
      >
        {orders.map((order) => (
          <div key={order.id} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem 0',
            borderBottom: '1px solid #f3f4f6'
          }}>
            {/* Food Image */}
            <div style={{
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '50%',
              overflow: 'hidden',
              marginRight: '0.875rem',
              flexShrink: 0
            }}>
              <Image 
                src={order.image} 
                alt={order.restaurant}
                width={56}
                height={56}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Order Details */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'black',
                margin: 0,
                marginBottom: '0.25rem'
              }}>{order.restaurant}</h3>
              
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                margin: 0,
                marginBottom: '0.25rem'
              }}>{order.items} items • {order.price}</p>
              
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                margin: 0
              }}>{order.date} • {order.status}</p>
            </div>

            {/* Reorder Button */}
            <button style={{
              backgroundColor: '#f3f4f6',
              color: 'black',
              border: 'none',
              borderRadius: '0.375rem',
              padding: '0.375rem 0.75rem',
              fontSize: '0.8rem',
              fontWeight: '500',
              cursor: 'pointer',
              flexShrink: 0
            }}>
              Reorder
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        borderRadius: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '1rem 2rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <button 
            onClick={() => router.push('/orders')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              backgroundColor: '#f3f4f6',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.backgroundColor = '#e5e7eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
          >
            <ShoppingBag style={{ width: '1.5rem', height: '1.5rem', color: 'black' }} />
          </button>
          
          <button 
            onClick={() => router.push('/')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              border: 'none',
              padding: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              borderRadius: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <MapPin style={{ width: '1.5rem', height: '1.5rem', color: '#6b7280' }} />
          </button>
          
          <button
            onClick={() => router.push('/profile')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              border: 'none',
              padding: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              borderRadius: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <User style={{ width: '1.5rem', height: '1.5rem', color: '#6b7280' }} />
          </button>
        </div>
      </div>

      {/* Bottom spacing for navigation */}
      <div style={{ height: '8rem' }}></div>
    </div>
  );
}