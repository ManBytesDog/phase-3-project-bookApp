class UsersController < ApplicationController

    def show 
        user = User.find_by(id: params[:id])
        if user
        render json: {id: user.id, name: user.name, email: user.email}
        else  
        render json: {messege: "Sorry but there is noone here :-(" }
        end
    end

    #be able to delete a user if there is enough time
    #be able to create a new user if there is enough time
    #be able to edit a user if there is enough time

end
