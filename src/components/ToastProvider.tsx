import { Toaster } from "react-hot-toast";

export function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      containerStyle={{
        top: 10,
      }}
      gutter={12}
      toastOptions={{
        duration: 4000,
        style: {
          background: "linear-gradient(135deg, #0f172a, #111827)",
          color: "#e5e7eb",
          border: "1px solid rgba(34,197,94,0.35)",
          borderRadius: "14px",
          padding: "14px 16px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.45), 0 0 20px rgba(34,197,94,0.15)",
          animation: "fadeInUp 0.3s ease",
          fontSize: "18px",
        },
        success: {
          icon: "✅",
          style: {
            background:
              "radial-gradient(circle at top, rgba(34,197,94,0.25), transparent 60%), linear-gradient(135deg, #052e16, #064e3b)",
            border: "1px solid rgba(34,197,94,0.45)",
            color: "#bbf7d0",
          },
        },
        error: {
          icon: "🚫",
          style: {
            background:
              "radial-gradient(circle at top, rgba(239,68,68,0.25), transparent 60%), linear-gradient(135deg, #3f0f0f, #7f1d1d)",
            border: "1px solid rgba(239,68,68,0.45)",
            color: "#fecaca",
          },
        },
      }}
    />
  );
}
