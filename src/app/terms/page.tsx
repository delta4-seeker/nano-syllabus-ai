import { PageHero } from "@/components/site/PageHero";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description: "The legally binding terms that govern your use of Nano Syllabus.",
  path: "/terms",
});

const LAST_UPDATED = "June 21, 2026";

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-foreground">
        {n}. {title}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <section className="container-px mx-auto max-w-3xl py-20">
        <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
          <Section n={1} title="Agreement to Terms">
            <p>
              We are {siteConfig.legalEntity} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), a company registered in Wyoming, United States, at{" "}
              {siteConfig.location}. We operate Nano Syllabus, including the website{" "}
              {siteConfig.url.replace("https://", "")} and related AI-powered study services
              (collectively, the &quot;Services&quot;).
            </p>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement
              made between you, whether personally or on behalf of an entity (&quot;you&quot;), and{" "}
              {siteConfig.legalEntity}, concerning your access to and use of the Services. By
              accessing or using the Services, you agree that you have read, understood, and agreed
              to be bound by all of these Terms.{" "}
              <span className="text-foreground">
                IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, YOU MUST DISCONTINUE USE IMMEDIATELY.
              </span>
            </p>
          </Section>

          <Section n={2} title="Intellectual Property Rights">
            <p>
              We are the owner or licensee of all intellectual property rights in the Services,
              including source code, databases, functionality, software, website designs, text,
              graphics, and the trademarks, service marks, and logos contained therein (the
              &quot;Marks&quot;). Subject to your compliance with these Terms, we grant you a
              non-exclusive, non-transferable, revocable license to access and use the Services for
              your personal, non-commercial, educational use.
            </p>
            <p>
              No part of the Services, and no Content or Marks, may be copied, reproduced,
              republished, scraped, uploaded, posted, publicly displayed, encoded, translated,
              transmitted, distributed, sold, licensed, or otherwise exploited for any commercial
              purpose without our express prior written permission. Content you submit remains yours,
              and you grant us a worldwide, non-exclusive license to host, use, and process it solely
              to operate, secure, and improve the Services.
            </p>
          </Section>

          <Section n={3} title="User Representations and Accounts">
            <p>
              By using the Services, you represent and warrant that the information you provide is
              accurate and current, that you have the legal capacity to accept these Terms, and that,
              if you are a minor, you use the Services with the consent and supervision of a parent,
              guardian, or school. You are responsible for safeguarding your account credentials and
              for all activity that occurs under your account.
            </p>
          </Section>

          <Section n={4} title="Prohibited Activities">
            <p>
              You may not access or use the Services for any purpose other than that for which we
              make them available. You agree not to:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Systematically retrieve data or content to create or compile a collection, database,
                or directory without written permission from us.
              </li>
              <li>Circumvent, disable, or interfere with security-related features of the Services.</li>
              <li>
                Use the Services to cheat, plagiarize, or violate the academic-integrity rules of any
                institution or examination authority.
              </li>
              <li>
                Upload or transmit viruses, Trojan horses, or other material that disrupts the
                Services, or attempt to bypass measures designed to restrict access.
              </li>
              <li>
                Copy or adapt the Services&apos; software, or use any automated system to access the
                Services in a manner that sends more requests than a human could reasonably produce.
              </li>
              <li>Use the Services in any manner inconsistent with applicable laws or regulations.</li>
            </ul>
          </Section>

          <Section n={5} title="AI-Generated and Educational Content">
            <p>
              Nano Syllabus provides AI-assisted study support aligned to curricula, past papers, and
              exam patterns. While we work to keep answers accurate and on-syllabus, the Services are
              a study aid, may contain errors, and do not replace your official curriculum,
              textbooks, instructors, or examination authorities. You are responsible for verifying
              important information and for how you use any output.
            </p>
          </Section>

          <Section n={6} title="Subscriptions and Payments">
            <p>
              Some features require a paid plan. Pricing, billing cycle, and plan details are shown at
              the point of purchase. You authorize us, or our payment processors, to charge the
              applicable fees. Unless stated otherwise or required by law, fees are non-refundable.
            </p>
          </Section>

          <Section n={7} title="Third-Party Websites and Content">
            <p>
              The Services may contain links to third-party websites or content that we do not
              monitor or control. We are not responsible for and do not endorse any third-party
              websites or content, and your use of them is at your own risk and subject to their
              terms.
            </p>
          </Section>

          <Section n={8} title="Site Management">
            <p>
              We reserve the right, but not the obligation, to monitor the Services for violations of
              these Terms, take appropriate legal action against anyone who violates the law or these
              Terms, and otherwise manage the Services to protect our rights and ensure proper
              functioning.
            </p>
          </Section>

          <Section n={9} title="Modifications and Interruptions">
            <p>
              We reserve the right to change, modify, or remove the contents of the Services at any
              time without notice. We will not be liable to you or any third party for any
              modification, suspension, or discontinuance of the Services, and we cannot guarantee the
              Services will be available at all times.
            </p>
          </Section>

          <Section n={10} title="Governing Law">
            <p>
              These Terms and your use of the Services are governed by and construed in accordance
              with the laws of the State of Wyoming, United States, without regard to its
              conflict-of-law principles.
            </p>
          </Section>

          <Section n={11} title="Dispute Resolution">
            <p>
              Any dispute arising out of or in connection with these Terms shall be resolved through
              binding arbitration administered by the American Arbitration Association under its
              Commercial Arbitration Rules. The place of arbitration shall be Sheridan, Wyoming, and
              the language shall be English. Any arbitration shall be limited to the dispute between
              the parties individually and shall not be joined with any other proceeding or
              arbitrated on a class-action basis.
            </p>
          </Section>

          <Section n={12} title="Disclaimer">
            <p className="uppercase">
              The Services are provided on an as-is and as-available basis. You agree that your use of
              the Services is at your sole risk. To the fullest extent permitted by law, we disclaim
              all warranties, express or implied, including the implied warranties of
              merchantability, fitness for a particular purpose, and non-infringement. We assume no
              liability for any errors or inaccuracies of content, any unauthorized access to or use
              of our servers, or any bugs, viruses, or harmful components transmitted through the
              Services by any third party.
            </p>
          </Section>

          <Section n={13} title="Limitations of Liability">
            <p className="uppercase">
              In no event will we or our directors, employees, or agents be liable to you or any
              third party for any direct, indirect, consequential, exemplary, incidental, special, or
              punitive damages, including lost profit, lost revenue, loss of data, or other damages
              arising from your use of the Services, even if we have been advised of the possibility
              of such damages.
            </p>
          </Section>

          <Section n={14} title="Indemnification">
            <p>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
              affiliates, officers, agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable attorneys&apos; fees, arising
              out of your use of the Services, your breach of these Terms, or your violation of the
              rights of a third party.
            </p>
          </Section>

          <Section n={15} title="Miscellaneous">
            <p>
              These Terms and any policies posted by us constitute the entire agreement between you
              and us. Our failure to enforce any right or provision shall not operate as a waiver. If
              any provision is determined to be unlawful, void, or unenforceable, that provision is
              severable and does not affect the validity of the remaining provisions. No joint
              venture, partnership, employment, or agency relationship is created between you and us by
              these Terms.
            </p>
          </Section>

          <Section n={16} title="Contact Us">
            <p>
              {siteConfig.legalEntity} — Nano Syllabus
              <br />
              {siteConfig.location}
              <br />
              Email:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-foreground underline">
                {siteConfig.email}
              </a>
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
