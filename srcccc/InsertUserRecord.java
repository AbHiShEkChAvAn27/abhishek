import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class InsertUserRecord {
    public static void main(String[] args) {
        // Load Hibernate configuration file (hibernate.cfg.xml) and build session factory
        Configuration configuration = new Configuration().configure("hibernate.cfg.xml");
        SessionFactory sessionFactory = configuration.buildSessionFactory();

        // Open a session and begin a transaction
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();

        try {
            // Create and populate a new User instance
            User newUser = new User();
            newUser.setUsername("johndoe");
            newUser.setPassword("secret");
            newUser.setEmail("johndoe@example.com");

            // Save the user into the database
            session.save(newUser);

            // Commit the transaction
            transaction.commit();
            System.out.println("User record inserted successfully!");
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        } finally {
            session.close();
            sessionFactory.close();
        }
    }
}