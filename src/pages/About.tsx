export const About = () => {
    return (
        <section className="d-flex justify-content-center align-items-center">
            <img
                src="https://my.wprunner.com/wp-content/uploads/2018/03/wpr-logo-icon-660.png"
                height={180}
                className="about-img__hello"
            />
            <div>
                <p className="fs-5">
                    Привет! Меня зовут Данил и я Frontend разработчик
                </p>
                <ul className="position-relative">
                    <h4>Мой стек:</h4>
                    <li>ReactJs</li>
                    <li>NextJs</li>
                    <li>TypeScript</li>
                    <li>Webpack/Vite</li>
                    <li>Auto test</li>
                    <nav className="position-absolute end-0 mt-3 me-5">
                        <h5>Ссылка на мой GH</h5>
                        <a href="https://github.com/danyaITi" target={'_blank'}>
                            GitHub
                        </a>
                    </nav>
                </ul>
            </div>
        </section>
    );
};
