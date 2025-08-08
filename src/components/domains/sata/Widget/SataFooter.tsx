export default function SataFooter() {
  return (
    <footer className="bg-[#0e1013] text-white py-12 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
        {/* Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">SATA Mongolia</h3>
          <p className="text-gray-400 mb-3">
            Бид танд дэлхийн чанартай мэргэжлийн багажийг санал болгож байна.
          </p>
          <p className="text-gray-400">
            📞 Утас:{" "}
            <a href="tel:70173060" className="hover:text-green-400 transition">
              7017-3060, 9111-7349
            </a>
          </p>
          <p className="text-gray-400">
            ✉️ Имэйл:{" "}
            <a
              href="mailto:info@sata.mn"
              className="hover:text-green-400 transition">
              info@sata.mn
            </a>
          </p>
        </div>

        {/* CTA / Highlight */}
        <div className="text-gray-400 md:text-right">
          <h3 className="text-xl font-bold mb-4 text-white">Бидний уриа</h3>
          <p>
            Чанар, бат бөх байдал, мэргэжлийн хэрэглээнд — <br />
            <span className="text-green-400 font-semibold">
              SATA MONGOLIA
            </span>{" "}
            таны итгэлтэй сонголт.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} SATA Mongolia. Бүх эрх хуулиар
        хамгаалагдсан.
      </div>
    </footer>
  );
}
