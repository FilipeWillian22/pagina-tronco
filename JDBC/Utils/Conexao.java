package Utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {
	 private static	 Connection con = null;
	 public static Connection getConexao() {
		
	try {
		con = DriverManager.getConnection("jdbc:mysql://localhost:3306/atividadefinal","root","04042023");
	} catch (SQLException e) {
	
		e.printStackTrace();
	} 
     return con;
   }

public static void fecharConexao() {
	try {
		con.close();
	} catch (SQLException e) {
		
		e.printStackTrace();
	}
	

	}
}
