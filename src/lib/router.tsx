import { useEffect, useState } from "react";

type RouterState = {
  path: string;
  params: Record<string, string>;
};

function parsePath(): RouterState {
  const hash = window.location.hash.replace(/^#/, "") || "/";
  const [path, query] = hash.split("?");
  const params: Record<string, string> = {};
  if (query) {
    new URLSearchParams(query).forEach((v, k) => {
      params[k] = v;
    });
  }
  return { path: path || "/", params };
}

export function useRouter() {
  const [state, setState] = useState<RouterState>(parsePath);

  useEffect(() => {
  }, []);

  useEffect(() => {
    const onChange = () => {
      setState(parsePath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return state;
}

export function navigate(path: string) {
  window.location.hash = path;
}

export function Link({
  to,
  children,
  className,
  onClick,
  style,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={`#${to}`}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
