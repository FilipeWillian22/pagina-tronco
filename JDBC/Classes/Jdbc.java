package Classes;
/*Cria uma aplicação para cadastrar produtos.
 *  O produto deve ter descrição, preço, estoque.
 *  Devem ser criadas as funcionalidades de CRUD: 
 *  Criar, alterar, excluir,consultar todos e 
 *  consultar por id*/
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mysql.cj.xdevapi.PreparableStatement;

import Utils.Conexao;

public class Jdbc {

	public static void main(String[] args) {
		
	/*if (Conexao.getConexao() !=null) {
		System.out.println("conectado");
	}*/
	    //salva();
		//atualiza();
		//exclui();
		//conultar();
		//consultaPorId(2);
}


	static void salva() {
		Connection con = Conexao.getConexao();
		String sql = "insert into tb_produtos(descricao, preco, estoque)values(?, ?, ?)";
		try {
			PreparedStatement stm = con.prepareStatement(sql);
		stm.setString(1, "feijão");
		stm.setFloat(2, 5.55f);
		stm.setInt(3, 80);
		stm.execute();
		 System.out.println("Produto cadastrado com sucesso!");
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally{
			Conexao.fecharConexao();
		}

	   }   
		
      static void atualiza() {
    	  Connection con = Conexao.getConexao();
    	  String sql = "update tb_produtos set descricao=?, preco=?, estoque=? where id=?";
    	  try {
        PreparedStatement stm = con.prepareStatement(sql);
        stm.setString(1, "Feijão Tropeiro");
        stm.setFloat(2, 7.0f);
        stm.setInt(3, 40);
        stm.setInt(4, 1); // pode substituir 1 pelo ID do produto que deseja atualizar
        stm.execute();
        System.out.println("Produto atualizado com sucesso!");
    } catch (SQLException e) {
        e.printStackTrace();
    } finally {
        Conexao.fecharConexao();   
	
    }
   }
      static void exclui() {
    	  Connection con = Conexao.getConexao();
    			  String sql = "delete from tb_produtos where id=?";
    			  
    			  try {
    			  PreparedStatement stm = con.prepareStatement(sql);
    			  stm.setInt(1, 3); // eleciona o id da coluna aqui
    			  stm.execute();
    			  System.out.println("Produto excluido com Sucesso!");
    			  } catch (SQLException e) {
    				  e.printStackTrace();
    		  }finally {
    				  Conexao.fecharConexao();
    	  }
      }    			  		  
     
      static void conultar() {
    	  Connection con = Conexao.getConexao();
    	  String sql  = "select * from tb_produtos ";
    	  try {
			PreparedStatement stm = con.prepareStatement(sql);
			ResultSet rs = stm.executeQuery();
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Descrição: " + rs.getString("descricao"));
                System.out.println("Preço: " + rs.getFloat("preco"));
                System.out.println("Estoque: " + rs.getInt("estoque"));
                System.out.println("-------------------------");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            Conexao.fecharConexao();
        }
    }

    static void consultaPorId(int id) {
        Connection con = Conexao.getConexao();
        String sql = "select * from tb_produtos where id=?";
        try {
            PreparedStatement stm = con.prepareStatement(sql);
            stm.setInt(1, id); // Subtituir o numero  pelo ID do produto que deseja consultar
            ResultSet rs = stm.executeQuery();
            if (rs.next()) {
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Descrição: " + rs.getString("descricao"));
                System.out.println("Preço: " + rs.getFloat("preco"));
                System.out.println("Estoque: " + rs.getInt("estoque"));
            } else {
                System.out.println("Produto não encontrado.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            Conexao.fecharConexao();
        }
    }
}
