package jsp.connection;

import javax.swing.*;
import java.sql.*;
import java.util.Scanner;

public class ConnectionTest {

	public static void main(String[] args) {
		
		 DBConnection conexion=new DBConnection();
	        //System.out.println(conexion.conectar());
	        //conexion.conectar();
	        Connection cn=null;
	        Statement stm=null;
	        ResultSet rs=null;
	        PreparedStatement ps=null;
	        String query="";

	        int id=0;
	        String usuario="";
	        String contraseña="";
	       /* Scanner scanner=new Scanner(System.in);
	        System.out.println("Ingrese su nombre de usuario");
	        usuario=scanner.next();
	        System.out.println("Ingrese su contraseña");
	        contraseña=scanner.next();
	*/
	        usuario= JOptionPane.showInputDialog("Ingrese su nombre de usuario");
	        contraseña= JOptionPane.showInputDialog("Ingrese su contraseña");
	        //System.out.println("Usuario="+usuario+" Clave="+contraseña);
	        JOptionPane.showMessageDialog(null,"Usuario="+usuario+" Clave="+contraseña);

	        cn= conexion.conectar();
	        //va despues de todo lo anterior
	        query="INSERT INTO login VALUES(?,?,?)";
	        try {
	            ps=cn.prepareStatement(query);
	            ps.setString(1,null); //Pasa un valor nulo para que la tabla genere solo el id
	            ps.setString(2,usuario);
	            ps.setString(3,contraseña);
	            ps.executeUpdate();
	        } catch (SQLException throwables) {
	            throwables.printStackTrace();
	        }
	        query="SELECT * FROM login";
	        try {
	            stm=cn.createStatement();
	            rs=stm.executeQuery(query);

	            while(rs.next()){
	                id=rs.getInt(1);
	                usuario=rs.getString(2);
	                contraseña= rs.getString(3);

	                System.out.println("Id="+id+" Usuario="+usuario+" Clave="+contraseña);
	            }

	        } catch (SQLException throwables) {
	            throwables.printStackTrace();
	        }

	        try {
	            if (rs != null) {
	                rs.close();
	            }
	            if(stm!=null){
	                stm.close();
	            }
	            if(cn!=null){
	                cn.close();
	            }
	        }catch (SQLException throwables) {
	                throwables.printStackTrace();
	            }

	}

}
