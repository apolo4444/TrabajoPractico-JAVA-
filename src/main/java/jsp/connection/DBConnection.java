package jsp.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import static java.lang.Class.forName;
import static java.sql.DriverManager.*;

public class DBConnection {

    private static final String CONTROLLER="com.mysql.cj.jdbc.Driver";
    private static final String URL="jdbc:mysql://localhost:3306/oradores";
    private static final String URL2="http://localhost/phpmyadmin/index.php?route=/database/structure&db=usuarios";
    private static final String USER="root";
    private static final String PASSWORD="";

    static{
        try {
            Class.forName(CONTROLLER);
            System.out.println("Se conecto el controlador conectamente");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            System.out.println("Error al cargar el conector");

        }
    }

    public Connection conectar()  {
         Connection conexion=null;
        try{
            conexion=DriverManager.getConnection(URL,USER,PASSWORD);
            System.out.println("Conexion exitosa");
        }catch(SQLException e){
            System.out.println(e);
            System.out.println("Conexion Fallida");
        }
        return conexion;


    }



}
