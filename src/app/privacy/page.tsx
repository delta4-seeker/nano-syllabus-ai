import { PageHero } from "@/components/site/PageHero";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How Nano Syllabus collects, uses, and protects your personal information.",
  path: "/privacy",
});

const LAST_UPDATED = "June 21, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <section className="container-px mx-auto max-w-3xl py-20">
        <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
          <p>
            This Privacy Policy explains how {siteConfig.legalEntity}, operating Nano Syllabus
            (&quot;Nano Syllabus,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
            collects, uses, and safeguards your information when you use our website and services
            (the &quot;Services&quot;). By using the Services, you agree to the practices described
            here.
          </p>

          <div>
            <h2 className="font-display text-2xl text-foreground">1. Information we collect</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <span className="text-foreground">Information you provide:</span> name, email
                address, phone number, school or curriculum details, and anything you submit through
                forms, sign-up, or messages.
              </li>
              <li>
                <span className="text-foreground">Learning activity:</span> questions you ask,
                topics you study, and feedback you give, so we can improve answers and tailor study
                support.
              </li>
              <li>
                <span className="text-foreground">Technical data:</span> device, browser, IP
                address, and usage data collected automatically through cookies and similar
                technologies.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground">2. How we use information</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>To provide, operate, and improve the Services.</li>
              <li>To personalize study support to your syllabus and exam pattern.</li>
              <li>To respond to your requests, bookings, and support questions.</li>
              <li>To send service updates and, where permitted, relevant communications.</li>
              <li>To maintain security and prevent fraud or abuse.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground">3. Sharing of information</h2>
            <p className="mt-4">
              We do not sell your personal information. We share it only with service providers who
              help us operate the Services (such as hosting, analytics, and communication tools),
              under confidentiality obligations, or where required by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground">4. Data retention</h2>
            <p className="mt-4">
              We keep personal information only as long as needed to provide the Services and for
              legitimate legal, accounting, or security purposes, after which it is deleted or
              anonymized.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground">5. Your rights</h2>
            <p className="mt-4">
              You may request access to, correction of, or deletion of your personal information,
              and you may opt out of non-essential communications at any time. To exercise these
              rights, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-foreground underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground">6. Children&apos;s privacy</h2>
            <p className="mt-4">
              Nano Syllabus supports students, including minors who use the Services under the
              guidance of a parent, guardian, or school. We collect only the information needed to
              provide study support and do not knowingly use student data for advertising.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground">7. Security</h2>
            <p className="mt-4">
              We use reasonable technical and organizational measures to protect your information.
              No method of transmission or storage is completely secure, so we cannot guarantee
              absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground">8. Changes to this policy</h2>
            <p className="mt-4">
              We may update this Privacy Policy from time to time. Material changes will be posted on
              this page with an updated date.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground">9. Contact us</h2>
            <p className="mt-4">
              {siteConfig.legalEntity} — Nano Syllabus
              <br />
              {siteConfig.location}
              <br />
              Email:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-foreground underline">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
