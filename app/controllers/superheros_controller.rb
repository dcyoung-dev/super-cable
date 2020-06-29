class SuperherosController < ApplicationController
  def index
    @my_hero = Superhero.create
    @superheros - Superhero.where.not(id: @my_hero.id)
  end

  def update
    superhero = Superhero.find(params[:id])
    superhero.update(superhero_params)
  end

  private

  def superhero_params
    params.require(:superhero).permit(:name, :power, :weakness)
  end
end
