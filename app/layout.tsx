import Link from "next/link";
import "../styles/global.css";

export const metadata = {
  title: "Kwenta State Log",
  description: "A living document which defines the state of Kwenta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="flex flex-row border-b-2 border-yellow-800 pb-4 pr-8 pt-8">
        <div className="basis-1/2">
          <Link href="/">
            <h1 className="font-mono text-3xl text-black">Kwenta State Log</h1>
          </Link>
          <p className="font-mono text-black">
            A living document defining the state of Kwenta
          </p>
        </div>
        <div className="basis-1/2">
          <p className="text-right font-mono text-black hover:underline">
            <Link className="space-x-3" href="/">
              Kwenta State Log
            </Link>
          </p>
          <p className="text-right font-mono text-black hover:underline">
            <Link href="/all-kips">Kwenta Improvement Proposals</Link>
          </p>
        </div>
      </div>
    </header>
  );

  const footer = (
    <footer className="border-t-2 border-yellow-800 pb-4 pr-8 pt-8 text-left font-mono text-black">
      <div>
        The Kwenta State Log (KSL) is a living document which defines the state
        of Kwenta. Amendments and additions can be made to the KSL via a{" "}
        <Link
          href="all-kips"
          className="font-mono text-yellow-800 hover:underline"
        >
          {" "}
          Kwenta Improvement Proposal
        </Link>{" "}
        (KIP). To propose a KIP to the Kwenta State Log, use the{" "}
        <Link
          href="/kips/kip-000"
          className="font-mono text-yellow-800 hover:underline"
        >
          KIP-0 template
        </Link>
        . For more information, see{" "}
        <Link
          href="/sections/1#kip-workflow"
          className="font-mono text-yellow-800 hover:underline"
        >
          KIP workflow
        </Link>
        . KIPs currently up for discussion can be found under{" "}
        <Link
          href="all-kips"
          className="font-mono text-yellow-800 hover:underline"
        >
          Kwenta Improvement Proposals
        </Link>
        .
      </div>
      <div className="pt-4">
        Copyright and related rights waived via{" "}
        <Link
          href="https://creativecommons.org/publicdomain/zero/1.0/"
          className="font-mono text-yellow-800 hover:underline"
        >
          CC0
        </Link>
        . This document was last edited on May 29, 2023. Based on work by
        different members of the Kwenta community.
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <body>
        <div className="mx-auto px-4">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
