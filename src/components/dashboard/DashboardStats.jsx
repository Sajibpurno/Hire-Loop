"use client";

import React from "react";

import { Card } from "@heroui/react";

export default function DashboardStats({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full bg-[#0a0a0a] p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {items.map((stat, index) => (
          <Card
            key={index}
            
            className="bg-[#121214] border border-zinc-900 rounded-2xl shadow-none p-6 flex flex-col justify-between h-[160px] overflow-hidden"
            radius="lg"
            isHoverable={false} 
          >
            {/* আইকন বক্স */}
            <div className="w-9 h-9 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center">
              {stat.icon}
            </div>

           
            <div className="space-y-1 mt-auto">
              <p className="text-xs font-normal text-zinc-400 tracking-wide">
                {stat.title}
              </p>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                {stat.value}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}