import { useState } from "react";
import JoditEditor from "jodit-react";

const initialServices = [
  {
    id: 1,
    name: "ভিসা প্রসেসিং",
    description: "বিদেশ ভ্রমণের জন্য ভিসা প্রসেসিং সেবা।",
    category: "ভ্রমণ",
    features: ["দ্রুত প্রসেস", "কম খরচ"],
    featured: false,
  },
  {
    id: 2,
    name: "পাসপোর্ট রিনিউ",
    description: "পাসপোর্ট নবায়ন ও সংশোধন সেবা।",
    category: "ডকুমেন্ট",
    features: ["সহজ আবেদন", "অনলাইন ফলোআপ"],
    featured: false,
  },
];

const Services = () => {
  const [services, setServices] = useState(initialServices);
  const [modalOpen, setModalOpen] = useState(false);
  const [newService, setNewService] = useState({ name: "", description: "", category: "", features: [] as string[], featured: false });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAdd = () => {
    setModalOpen(true);
    setEditingId(null);
    setNewService({ name: "", description: "", category: "", features: [], featured: false });
  };

  const handleEdit = (id: number) => {
    const svc = services.find(s => s.id === id);
    if (svc) {
      setEditingId(id);
      setNewService({ name: svc.name, description: svc.description, category: svc.category, features: svc.features || [], featured: svc.featured });
      setModalOpen(true);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setServices(svcs =>
        svcs.map(s =>
          s.id === editingId ? { ...s, ...newService } : s
        )
      );
    } else {
      setServices(svcs => [
        ...svcs,
        { ...newService, id: Math.max(0, ...svcs.map(s => s.id)) + 1 },
      ]);
    }
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Services</h1>
        <button
          onClick={handleAdd}
          className="bg-primary text-white font-semibold py-2 px-5 rounded-lg hover:bg-primary/90 transition"
        >
          Add Service
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow">
          <thead>
            <tr className="bg-primary/10 text-primary">
              <th className="py-3 px-4 border-b text-left">#</th>
              <th className="py-3 px-4 border-b text-left">Name</th>
              <th className="py-3 px-4 border-b text-left">Description</th>
              <th className="py-3 px-4 border-b text-left">Category</th>
              <th className="py-3 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((svc, i) => (
              <tr key={svc.id} className="hover:bg-primary/5">
                <td className="py-2 px-4 border-b">{i + 1}</td>
                <td className="py-2 px-4 border-b">{svc.name}</td>
                <td className="py-2 px-4 border-b">{svc.description}</td>
                <td className="py-2 px-4 border-b">{svc.category}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(svc.id)}
                    className="text-primary font-medium hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    
                    className="text-red-500 font-medium hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-400">No services found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Add/Edit */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <form
            onSubmit={handleSave}
            className="bg-white rounded-lg shadow-lg p-8 w-full max-w-[50%] max-h-[calc(100vh-56px)] overflow-y-auto   space-y-5 relative"
          >
            <h2 className="text-xl font-bold mb-2">{editingId ? "Update Service" : "Add Service"}</h2>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-primary text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-primary"
                value={newService.name}
                onChange={e => setNewService(s => ({ ...s, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-primary"
                value={newService.description}
                onChange={e => setNewService(s => ({ ...s, description: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Featured</label>
              <select
                className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-primary"
                value={newService.featured ? "true" : "false"}
                onChange={e => setNewService(s => ({ ...s, featured: e.target.value === "true" }))}
                required
              >
                <option value="true">Featured</option>
                <option value="false">Not Featured</option>
              </select>
            </div>

            {/* Features (Creatable Multi-Select) */}
            <div>
              <label className="block mb-1 font-medium">Features</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {newService.features.map((f, i) => (
                  <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded flex items-center gap-1">
                    {f}
                    <button
                      type="button"
                      className="ml-1 text-xs text-primary hover:text-red-500"
                      onClick={() => setNewService(s => ({ ...s, features: s.features.filter((_, idx) => idx !== i) }))}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-primary"
                placeholder="Add feature and press Enter"
                onKeyDown={e => {
                  const val = (e.target as HTMLInputElement).value.trim();
                  if ((e.key === 'Enter' || e.key === ',') && val) {
                    e.preventDefault();
                    if (!newService.features.includes(val)) {
                      setNewService(s => ({ ...s, features: [...s.features, val] }));
                    }
                    (e.target as HTMLInputElement).value = '';
                  }
                }}
              />
            </div>
            
            {/* image upload */}
            <div>
              <label className="block mb-1 font-medium">Image</label>
              <input
                type="file"
                className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-primary"
                onChange={e => setNewService(s => ({ ...s, image: e.target.files?.[0] }))}
                required
              />
            </div>

            {/* upload details preview with jodit editor */}
            <div>
              <label className="block mb-1 font-medium">Details</label>
             <JoditEditor
             value={newService.description}
             onChange={e => setNewService(s => ({ ...s, description: e }))}
             />
            </div>


            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary/90 transition"
            >
              {editingId ? "Update" : "Add"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Services;