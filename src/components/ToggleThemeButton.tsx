import type { FC } from 'react';
import { useResponsiveContext, Button, SunFilledIcon, MoonFilledIcon } from 'phantom-library';
import styles from './ToggleThemeButton.module.scss';

const ToggleThemeButton: FC = () => {
    const { theme, setTheme } = useResponsiveContext();

    const toggleTheme = (): void => (theme === 'light' ? setTheme('dark') : setTheme('light'));

    return <Button Icon={theme == 'light' ? SunFilledIcon : MoonFilledIcon} onClick={toggleTheme} variant="text" rounded className={styles.button} />;
};

export { ToggleThemeButton };
