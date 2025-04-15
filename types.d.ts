declare module '*.svg' {
    import type * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;
    export default ReactComponent;
}

export {};
