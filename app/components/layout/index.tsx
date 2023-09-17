import { Form, Link } from "@remix-run/react";
import { clsx } from "clsx";
import type { FunctionComponent, PropsWithChildren } from "react";
import { globalStyles } from "~/styles";
import { useOptionalUser } from "~/utils";
import { styles } from "./styles";

const logo = {
  url: "/logo.png",
  alt: "Dices & Dragons VT Logo",
};

export interface LayoutProps extends PropsWithChildren {}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const { div, img, text } = globalStyles;
  const user = useOptionalUser();

  const UserButton = () =>
    user ? (
      <div className="text-end">
        <p>Hello, {user?.email}</p>
        <Form action="/logout" method="post">
          <button type="submit" className={clsx(text.italic, "text-sm")}>
            Logout
          </button>
        </Form>
      </div>
    ) : (
      <Link to="/login">Login</Link>
    );

  return (
    <div className={styles.container}>
      <div
        className={clsx(
          styles.header,
          div.flex.between,
          text.white,
          "sticky top-0",
        )}
      >
        <Link to="/" className="flex items-end">
          <div>
            <div className="flex relative">
              <h1 className="underline">Dices </h1>
              <img
                className={clsx(img.logo, "absolute -right-2")}
                src={logo.url}
                alt={logo.alt}
              />
            </div>
            <h1 className="leading-3 pb-3">Dragons</h1>
          </div>
        </Link>
        <UserButton />
      </div>
      {children}
    </div>
  );
};
