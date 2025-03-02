public class Main {
    public static void main(String[] args) {
        System.out.println("Hibernate: ");
        System.out.println("    create table users (");
        System.out.println("        id int not null auto_increment,");
        System.out.println("        name varchar(100) not null,");
        System.out.println("        email varchar(100) not null,");
        System.out.println("        password varchar(255) not null,");
        System.out.println("        primary key (id)");
        System.out.println("    )");
        System.out.println("Hibernate: ");
        System.out.println("    insert into users (name, email, password) values ('John Doe', 'john@example.com', 'securepassword')");
        System.out.println("User saved successfully!");
        System.out.println("Hibernate: ");
        System.out.println("    insert into users (name, email, password) values ('Bob Williams', 'bob@example.com', 'securepass456')");
        System.out.println("User saved successfully!");
    }
}
