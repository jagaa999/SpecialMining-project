import _ from "lodash";
import Banner from "../../components/Banner";
import { generalTheme } from "../../config/generalConfig";
import PanelMain from "../../config/PanelMain";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <Banner item={staticItem?.banner} />

      <PanelMain>
        {/* ✅ Career Section */}
        <section className="my-24">
          <p className={generalTheme?.titleMain}>{staticItem?.career.title}</p>

          <p className={generalTheme?.title2}>HR Policy</p>
          <p>{staticItem?.career.hrPolicy}</p>

          <p className={generalTheme?.title2}>Open positions</p>
          <p>{staticItem?.career.openPositions}</p>
        </section>

        {/* ✅ Get in touch + Form */}
        <section className="my-24">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Info */}
            <div className="space-y-6">
              <p className={generalTheme?.titleMain}>
                {staticItem?.contactInfo.sectionSubtitle}
              </p>
              <p className="text-3xl font-bold">
                {staticItem?.contactInfo.sectionTitle}
              </p>

              <div>
                <p className={generalTheme?.title2}>
                  {staticItem?.contactInfo.officeTitle}
                </p>
                <p className="text-gray-700">
                  {staticItem?.contactInfo.office}
                </p>
              </div>

              <div>
                <p className={generalTheme?.title2}>
                  {staticItem?.contactInfo.phoneTitle}
                </p>
                <p className="text-gray-700">{staticItem?.contactInfo.phone}</p>
              </div>

              <div>
                <p className={generalTheme?.title2}>
                  {staticItem?.contactInfo.emailTitle}
                </p>
                <p className="text-gray-700">{staticItem?.contactInfo.email}</p>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg space-y-4">
              <p className={generalTheme?.title2}>{staticItem?.form.title}</p>

              <Link href={"/career"} className="underline text-[#c8102e]">
                Click here to apply for a job
              </Link>
              {/* <div className="grid grid-cols-2 gap-4">
                {_.map(staticItem?.formFields, (field: any, index: number) =>
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
                {staticItem?.form.buttonLabel}
              </button> */}
            </div>
          </div>
        </section>

        {/* ✅ Google Map Section */}
        <section className="w-full h-[500px] rounded-3xl">
          <iframe
            src={staticItem?.mapSrc}
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

const staticItem = {
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.985429525627!2d106.854799!3d47.9047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU0JzE2LjkiTiAxMDbCsDUxJzI1LjciRQ!5e0!3m2!1sen!2smn!4v1711546500000",
};
