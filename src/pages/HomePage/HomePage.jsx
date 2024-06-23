import css from './HomePage.module.css'; // Імпорт стилів

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.header}>Welcome to Our Application</h1>
      <h2 className={css.subheader}>Your journey begins here</h2>
      <p className={css.content}>
        We are excited to have you with us. Our application is designed to help
        you manage your tasks efficiently and stay organized. Whether you are
        looking to track your daily activities or manage a larger project, we
        have the tools you need to succeed.
      </p>
      <p className={css.content}>
        Get started by exploring our features and discovering how we can help
        you achieve your goals. If you have any questions, feel free to reach
        out to our support team. We are here to assist you every step of the
        way.
      </p>
    </div>
  );
};

export default HomePage;
