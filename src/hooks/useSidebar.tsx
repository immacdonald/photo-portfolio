import type { SetState } from 'phantom-library';
import { useState, useEffect } from 'react';

const useSidebar = (): [boolean, SetState<boolean>] => {
    const [sidebar, setSidear] = useState<boolean>(true);

    useEffect(() => {
        document.documentElement.setAttribute('data-sidebar', `${sidebar}`);
    }, [sidebar]);

    return [sidebar, setSidear];
};

export default useSidebar;