class ChapsController < ApplicationController

    before_action :set_comic
    before_action :set_chap, only: [:show, :edit, :update, :destroy]

    def index
        render component: "Chaps", props: { comic: @comic, chaps: @comic.chaps }
    end

    def show
        render component: "Chap", props: { comic: @comic, chap: @chap }
    end

    def new
        render component: "ChapNew", props: { comic: @comic, chap: @chap }
    end

    def create
        @chap = @comic.chaps.new(set_params)
        if @chap.save
            redirect_to comic_chaps_path(@comic)
        else
            render :new
        end
    end

    def edit
        render component: "ChapEdit", props: { comic:@comic, chap: @chap }
    end

    def update
        if @chap.update(set_params)
            redirect_to comic_chaps_path(@comic)
        else
            render :edit
        end
    end

    def destroy
        @chap.destroy
        redirect_to comic_chaps_path(@comic)
    end

    private

    def set_comic
        @comic = Comic.find(params[:comic_id])
    end

    def set_chap
        @chap = @comic.chaps.find(params[:id])
    end

    def set_params
        params.require(:chap).permit(:title, :sum)
    end

    ##here will have get comic method and sanitize params

end
