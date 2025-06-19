import Link from "next/link";
import PanelMain from "atomv2/components/Panel/PanelMain";
import { generalTheme } from "../generalConfig";
import Banner from "../Widget/Banner";

export default function ContactPage({ item = item_local }: { item: any }) {
  return (
    <main>
      <Banner item={item?.banner} />

      <PanelMain>
        {/* ✅ Career Section */}
        <section className="my-24">
          <p className={generalTheme?.titleMain}>{item?.career.title}</p>

          <p className={generalTheme?.title2}>HR Policy</p>
          <p>{item?.career.hrPolicy}</p>

          <p className={generalTheme?.title2}>Open positions</p>
          <p>{item?.career.openPositions}</p>
        </section>

        {/* ✅ Get in touch + Form */}
        <section className="my-24">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Info */}
            <div className="space-y-6">
              <p className={generalTheme?.titleMain}>
                {item?.contactInfo.sectionSubtitle}
              </p>
              <p className="text-3xl font-bold">
                {item?.contactInfo.sectionTitle}
              </p>

              <div>
                <p className={generalTheme?.title2}>
                  {item?.contactInfo.officeTitle}
                </p>
                <p className="text-gray-700">{item?.contactInfo.office}</p>
              </div>

              <div>
                <p className={generalTheme?.title2}>
                  {item?.contactInfo.phoneTitle}
                </p>
                <p className="text-gray-700">{item?.contactInfo.phone}</p>
              </div>

              <div>
                <p className={generalTheme?.title2}>
                  {item?.contactInfo.emailTitle}
                </p>
                <p className="text-gray-700">{item?.contactInfo.email}</p>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg space-y-4">
              <p className={generalTheme?.title2}>{item?.form.title}</p>

              <Link href={"/career"} className="underline text-[#c8102e]">
                Click here to apply for a job
              </Link>
              {/* <div className="grid grid-cols-2 gap-4">
                {_.map(item?.formFields, (field: any, index: number) =>
                  field.type === "select" ? (
                    <div key={index} className="w-full">
                      <label className="block text-sm">{field.label}</label>
                      <select className="p-2 border rounded w-full">
                        {field.options.map((option, idx) => (
                          <option key={idx}>{option}</option>
                        ))}
                      </select>
                    </div>
                  ) : field.type === "textarea" ? (
                    <div key={index} className="col-span-2">
                      <label className="block text-sm">{field.label}</label>
                      <textarea
                        placeholder={field.placeholder}
                        className="p-2 border rounded w-full h-32"
                      />
                    </div>
                  ) : (
                    <div key={index} className="w-full">
                      <label className="block text-sm">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="p-2 border rounded w-full"
                      />
                    </div>
                  )
                )}
              </div>
              <button className="bg-[#c8102e] text-white px-6 py-2 rounded hover:bg-red-700 transition-all">
                {item?.form.buttonLabel}
              </button> */}
            </div>
          </div>
        </section>

        {/* ✅ Google Map Section */}
        <section className="w-full h-[500px] rounded-3xl">
          <iframe
            src={item?.mapSrc}
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </PanelMain>
    </main>
  );
}

const item_local = {
  banner: {
    title: "Contact Us",
    subtitle: "Special Mining LLC > Contact Us",
    mainimage:
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
  },
  career: {
    title: "Career",
    hrPolicy:
      "Ensuring the safety of our employees and providing them with the opportunity to thrive is our primary goal. Furthermore, we aim to have a diverse and inclusive workforce.",
    openPositions:
      "We are always looking for new talent to share our success with.",
  },
  contactInfo: {
    sectionTitle: "Get in touch",
    sectionSubtitle: "Contact us",
    officeTitle: "🏢 Our Office",
    phoneTitle: "📞 Phone Number",
    emailTitle: "✉️ Email Address",
    office: "Regis Place, Suite 1702, 15th khoroo, Khan-Uul district",
    phone: "+976 70003639",
    email: "info@special.mn",
    socialLinks: [
      { icon: "📘", url: "#" },
      { icon: "📸", url: "#" },
      { icon: "💼", url: "#" },
    ],
  },
  form: {
    title: "Make Your Request",
    buttonLabel: "Send a Message →",
  },
  formFields: [
    { label: "Your name", type: "text", placeholder: "Your name" },
    { label: "Email address", type: "email", placeholder: "Email address" },
    { label: "Your number", type: "text", placeholder: "Your number" },
    {
      label: "Request type",
      type: "select",
      options: ["Blasting work", "Production", "Technical services"],
    },
    { label: "Message", type: "textarea", placeholder: "Message" },
  ],
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d778.4218124003837!2d106.90978491097576!3d47.90067709640233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96936ef95fd02b%3A0x4ddcd9c18ef16c15!2sRegis%20Place!5e1!3m2!1sen!2smn!4v1744281165290!5m2!1sen!2smn",
};
