import React from 'react';
import { Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';

const ProductManager = () => {
  // Mock Data
  const products = [
    { id: '1', name: 'Premium Brass Door Handle', category: 'Hardware', price: '₹4,500', stock: 120, status: 'Active' },
    { id: '2', name: 'Luxury Kitchen Sink', category: 'Kitchen', price: '₹12,000', stock: 15, status: 'Low Stock' },
    { id: '3', name: 'Matte Black Faucet', category: 'Bath', price: '₹3,200', stock: 45, status: 'Active' },
    { id: '4', name: 'Industrial Wall Light', category: 'Lighting', price: '₹2,800', stock: 0, status: 'Out of Stock' },
    { id: '5', name: 'Minimalist Wardrobe Pull', category: 'Hardware', price: '₹850', stock: 300, status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Product Catalog</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">Manage your inventory, pricing, and availability.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
          <Plus size={16} />
          Add Product
        </button>
      </div>

      <div className="bg-white border rounded-xl dark:bg-slate-900 border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 p-4 border-b sm:flex-row sm:items-center sm:justify-between border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="relative max-w-sm w-full">
            <Search className="absolute text-slate-400 left-3 top-1/2 -translate-y-1/2" size={16} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full py-2 pl-9 pr-4 text-sm transition-colors border outline-none bg-slate-50 dark:bg-slate-950 rounded-lg border-slate-200 dark:border-slate-700 focus:border-brand-red dark:focus:border-brand-red text-slate-900 dark:text-slate-100"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-slate-200 dark:bg-slate-950 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
             <Filter size={16} /> Filters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold tracking-wider uppercase bg-slate-50 dark:bg-slate-900/50">
                <th className="p-4 font-semibold">Product Name</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Price</th>
                <th className="p-4 font-semibold">Stock</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="text-right p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {products.map((product) => (
                <tr key={product.id} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 text-sm font-semibold text-slate-900 dark:text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-md bg-slate-100 dark:bg-slate-800"></div>
                      {product.name}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{product.category}</td>
                  <td className="p-4 text-sm font-medium text-slate-600 dark:text-slate-300">{product.price}</td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{product.stock}</td>
                  <td className="p-4">
                     <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                       product.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' :
                       product.status === 'Low Stock' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' :
                       'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400'
                     }`}>
                       {product.status}
                     </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2 text-slate-400">
                      <button className="p-2 transition-colors rounded-lg hover:bg-brand-red/10 hover:text-brand-red">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 transition-colors rounded-lg hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-500/10">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Dummy */}
        <div className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400">
          <span>Showing 1 to 5 of 124 entries</span>
          <div className="flex gap-1">
             <button className="px-3 py-1 font-medium bg-white border rounded border-slate-200 dark:bg-slate-900 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">Prev</button>
             <button className="px-3 py-1 font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded">1</button>
             <button className="px-3 py-1 font-medium bg-white border rounded border-slate-200 dark:bg-slate-900 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">2</button>
             <button className="px-3 py-1 font-medium bg-white border rounded border-slate-200 dark:bg-slate-900 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManager;
