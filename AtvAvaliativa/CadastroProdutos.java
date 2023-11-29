package Avaliacao;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CadastroProdutos {
    public static void main(String[] args) {
        // Carregando dados do arquivo
        List<Produto> produtos = carregarDados();

        while (true) {
            System.out.println("\nEscolha uma opção:");
            System.out.println("1 - Adicionar produto");
            System.out.println("2 - Exibir produtos");
            System.out.println("3 - Editar produto");
            System.out.println("4 - Remover produto");
            System.out.println("5 - Sair");

            Scanner scanner = new Scanner(System.in);
            int opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    System.out.print("Descrição: ");
                    String descricao = scanner.next();
                    System.out.print("Preço: ");
                    double preco = scanner.nextDouble();
                    System.out.print("Estoque: ");
                    int estoque = scanner.nextInt();
                    adicionarProduto(produtos, descricao, preco, estoque);
                    break;

                case 2:
                    exibirProdutos(produtos);
                    break;

                case 3:
                    System.out.print("ID do produto a ser editado: ");
                    int id = scanner.nextInt() - 1;
                    if (id >= 0 && id < produtos.size()) {
                        System.out.print("Nova descrição: ");
                        String novaDescricao = scanner.next();
                        System.out.print("Novo preço: ");
                        double novoPreco = scanner.nextDouble();
                        System.out.print("Novo estoque: ");
                        int novoEstoque = scanner.nextInt();
                        editarProduto(produtos, id, novaDescricao, novoPreco, novoEstoque);
                    } else {
                        System.out.println("id inválido. Nenhum produto foi editado.");
                    }
                    break;

                case 4:
                    System.out.print("id do produto a ser removido: ");
                    int idRemover = scanner.nextInt() - 1;
                    removerProduto(produtos, idRemover);
                    break;
                case 5:
                    // Salvando dados no arquivo antes de sair
                    salvarDados(produtos);
                    System.out.println("Dados salvos. Saindo...");
                    System.exit(0);
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
    }

    // Carregar dados do arquivo
    private static List<Produto> carregarDados() {
        List<Produto> produtos = new ArrayList<>();
        try {
            BufferedReader reader = new BufferedReader(new FileReader("produtos.txt"));
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 3) {
                    String descricao = parts[0];
                    double preco = Double.parseDouble(parts[1]);
                    int estoque = Integer.parseInt(parts[2]);
                    Produto produto = new Produto(descricao, preco, estoque);
                    produtos.add(produto);
                }
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return produtos;
    }

    // Salvar dados no arquivo
    private static void salvarDados(List<Produto> produtos) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter("produtos.txt"));
            for (Produto produto : produtos) {
                writer.write(produto.toString());
                writer.newLine();
            }
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Adicionar um produto à lista
    private static void adicionarProduto(List<Produto> produtos, String descricao, double preco, int estoque) {
        Produto produto = new Produto(descricao, preco, estoque);
        produtos.add(produto);
        System.out.println("Produto adicionado com sucesso!");
    }

    // Exibir a lista de produtos
    private static void exibirProdutos(List<Produto> produtos) {
        if (produtos.isEmpty()) {
            System.out.println("Nenhum produto cadastrado.");
        } else {
            for (int i = 0; i < produtos.size(); i++) {
                Produto produto = produtos.get(i);
                System.out.println("Produto " + (i + 1) + ":");
                System.out.println("Descrição: " + produto.getDescricao());
                System.out.println("Preço: " + produto.getPreco());
                System.out.println("Estoque: " + produto.getEstoque());
                System.out.println();
            }
        }
    }

    // Editar um produto na lista
    private static void editarProduto(List<Produto> produtos, int id, String novaDescricao, double novoPreco, int novoEstoque) {
        if (id >= 0 && id < produtos.size()) {
            Produto produto = produtos.get(id);
            produto.setDescricao(novaDescricao);
            produto.setPreco(novoPreco);
            produto.setEstoque(novoEstoque);
            System.out.println("Produto editado com sucesso!");
        } else {
            System.out.println("id inválido. Nenhum produto foi editado.");
        }
    }

    // Remover um produto da lista
    private static void removerProduto(List<Produto> produtos, int id) {
        if (id >= 0 && id < produtos.size()) {
            produtos.remove(id);
            System.out.println("Produto removido com sucesso!");
        } else {
            System.out.println("id inválido. Nenhum produto foi removido.");
        }
    }
}


