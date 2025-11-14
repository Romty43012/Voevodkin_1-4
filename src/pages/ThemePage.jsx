import { useTheme } from '../contexts/ThemeContext';
import Button from '../components/Button';
import Container from '../components/Container';

export default function ThemePage() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Container>
            <div className="p-4">
                <h2>Страница темы (Context)</h2>
                <div className="text-center">
                    <p className="h4">Текущая тема: <strong>{theme === 'light' ? 'День ☀️' : 'Ночь 🌙'}</strong></p>
                    <Button onClick={toggleTheme} style={{ fontSize: '1.2rem', padding: '12px 24px' }}>
                        Переключить на {theme === 'light' ? 'ночь 🌙' : 'день ☀️'}
                    </Button>
                </div>
            </div>
        </Container>
    );
}

