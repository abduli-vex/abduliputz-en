export default function Contacts() {
  return (
    <section className="bg-[#222222] text-[#f5f5f5] max-w-7xl mx-auto min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">
            Contact_
          </h1>

          <p className="mt-5 max-w-2xl text-neutral-400 leading-relaxed">
            Interested in working together, have a question, or just want to
            connect? Feel free to reach out using the information below or send
            me a message directly.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Email
                </p>

                <a
                  href="mailto:abduliputz@gmail.com"
                  className="mt-2 inline-block text-lg hover:underline"
                >
                  abduliputz@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Phone
                </p>

                <p className="mt-2 text-lg">+49 1590 495 5042</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Location
                </p>

                <p className="mt-2 text-lg">Germany</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-neutral-700 bg-transparent rounded-md px-4 py-3 outline-none transition focus:border-[#f5f5f5]"
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-neutral-700 bg-transparent rounded-md px-4 py-3 outline-none transition focus:border-[#f5f5f5]"
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full border border-neutral-700 bg-transparent rounded-md px-4 py-3 outline-none resize-none transition focus:border-[#f5f5f5]"
              />
            </div>

            <button
              type="submit"
              className="border border-[#f5f5f5] px-6 py-3 rounded-md transition hover:bg-[#f5f5f5] hover:text-[#222222]"
            >
              Send Inquiry →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
