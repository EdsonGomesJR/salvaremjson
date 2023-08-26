import NextLink from 'next/link';
import { ReactNode } from 'react';

export { Link };

type LinkProps = {
    href: string;
  children: ReactNode
}

function Link({ href, children, ...props }:LinkProps) {
    return (
        <NextLink href={href}>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    );
}
