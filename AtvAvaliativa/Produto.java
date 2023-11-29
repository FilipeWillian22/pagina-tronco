package Avaliacao;
class Produto {
    private String descricao;
    private double preco;
    private int estoque;

    public Produto(String descricao, double preco, int estoque) {
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
    }

    public String getDescricao() {
        return descricao;
    }

    public double getPreco() {
        return preco;
    }

    public int getEstoque() {
        return estoque;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public void setEstoque(int estoque) {
        this.estoque = estoque;
    }

    @Override
    public String toString() {
        return descricao + "," + preco + "," + estoque;
    }
}

