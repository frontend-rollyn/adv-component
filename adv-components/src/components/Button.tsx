import { ComponentPropsWithRef } from "react";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithRef<"a"> & {
  href?: string;
};

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a {...props}></a>;
  }
  return <button {...props}></button>;
}
