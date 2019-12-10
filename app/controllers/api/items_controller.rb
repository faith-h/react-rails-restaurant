class Api::ItemsController < ApplicationController
  before_action :set_items, only: [:show, :update, :destroy]
  before_action :set_menu

  def index
    render json: @menu.items
  end

  def create
    item = @menu.items.new(item_params)
    if item.save
      render json: item
    else
      render json: {erros: item.errors }
    end
  end

  def update
    @item.update(item_params)
    render json: @item
  end

  def destroy
    @item.destroy
    render json: {message: "Item deleted" }
  end

  private

  def item_params
    params.require(:item).permit(:name, :price)
  end

  def set_items
    @item = Item.find(params[:id])
  end

  def set_menu
    @menu= Menu.find(params[:menu_id])
  end

end
