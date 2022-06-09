module BxBlockSellerProfile
  class CreateSellerProfileController  < ApplicationController

    def create
      @profile =  current_user.sellerprofile
      sellerprofile_exist = @profile.present?
      if sellerprofile_exist
        return render json: {
            msg: 'Sellerprofile already exist',
            success: false
        }, status: :unprocessable_entity
      else
        @seller_profile = current_user.create_sellerprofile(gender: params[:data][:gender], marital_status: params[:data][:marital_status], shop_name: params[:data][:shop_name], type_seller: params[:data][:type_seller], category: params[:data][:category],
          shop_address: params[:data][:shop_address], home_address: params[:data][:home_address], area_address: params[:data][:area_address], city: params[:data][:city], state: params[:data][:state], country: params[:data][:country], pin_code: params[:data][:pin_code], birthday: params[:data][:birthday]).save
        if @seller_profile  #if true
          if params[:data][:full_phone_number].present?
            phone = Phonelib.parse(params[:data][:full_phone_number])
            @sms_otp = AccountBlock::SmsOtp.where(full_phone_number: phone.sanitized)
            if @sms_otp.present?
              @sms_verified = @sms_otp.last.activated
              if @sms_verified
                current_user.update!(first_name: params[:data][:first_name], last_name: params[:data][:last_name], email: params[:data][:email], full_phone_number: params[:data][:full_phone_number])
                return render json: {
                      data: ActiveModelSerializers::SerializableResource.new(current_user, serializer: ProfileSerializer),
                      msg: 'Successfully profile created',
                      success: true
                }, status: :ok
                current_user.update!(first_name: params[:data][:first_name], last_name: params[:data][:last_name], email: params[:data][:email])
                return render json: {
                      data: ActiveModelSerializers::SerializableResource.new(current_user, serializer: ProfileSerializer),
                      msg: 'Successfully profile created',
                      success: true
                }, status: :ok
              end
            else
              current_user.update!(first_name: params[:data][:first_name], last_name: params[:data][:last_name], email: params[:data][:email])
              return render json: {
                    data: ActiveModelSerializers::SerializableResource.new(current_user, serializer: ProfileSerializer),
                    msg: 'Successfully profile created',
                    success: true
              }, status: :ok  
            end
          else
            current_user.update!(first_name: params[:data][:first_name], last_name: params[:data][:last_name], email: params[:data][:email])
            return render json: {
                    data: ActiveModelSerializers::SerializableResource.new(current_user, serializer: ProfileSerializer),
                  msg: 'Successfully profile created',
                  success: true
            }, status: :ok
          end
        else
          return render json: {
              msg: 'Profile cannot be created.',
              success: false
          }, status: :unprocessable_entity
        end
      end
    end

    def update
      @profile =  current_user.sellerprofile
      sellerprofile_exist = @profile.present?
      if sellerprofile_exist
        @seller_profile = current_user.sellerprofile.update!(gender: params[:data][:gender], marital_status: params[:data][:marital_status], shop_name: params[:data][:shop_name], type_seller: params[:data][:type_seller], category: params[:data][:category],
          shop_address: params[:data][:shop_address], home_address: params[:data][:home_address], area_address: params[:data][:area_address], city: params[:data][:city], state: params[:data][:state], country: params[:data][:country], pin_code: params[:data][:pin_code], birthday: params[:data][:birthday])
        if @seller_profile
          if params[:data][:full_phone_number].present?
            phone = Phonelib.parse(params[:data][:full_phone_number])
            @sms_otp = AccountBlock::SmsOtp.where(full_phone_number: phone.sanitized)
            if @sms_otp.present?
              @sms_verified = @sms_otp.last.activated
              if @sms_verified
                current_user.update!(first_name: params[:data][:first_name], last_name: params[:data][:last_name], email: params[:data][:email], full_phone_number: params[:data][:full_phone_number])
                return render json: {
                      data: ActiveModelSerializers::SerializableResource.new(current_user, serializer: ProfileSerializer),
                      msg: 'Successfully profile updated',
                      success: true
                }, status: :ok
              else
                current_user.update!(first_name: params[:data][:first_name], last_name: params[:data][:last_name], email: params[:data][:email])
                return render json: {
                      data: ActiveModelSerializers::SerializableResource.new(current_user, serializer: ProfileSerializer),
                      msg: 'Successfully profile updated',
                      success: true
                }, status: :ok
              end
            else
              current_user.update!(first_name: params[:data][:first_name], last_name: params[:data][:last_name], email: params[:data][:email])
              return render json: {
                    data: ActiveModelSerializers::SerializableResource.new(current_user, serializer: ProfileSerializer),
                    msg: 'Successfully profile updated',
                    success: true
              }, status: :ok  
            end
          else
            current_user.update!(first_name: params[:data][:first_name], last_name: params[:data][:last_name], email: params[:data][:email])
            return render json: {
                  data: ActiveModelSerializers::SerializableResource.new(current_user, serializer: ProfileSerializer),
                  msg: 'Successfully profile updated',
                  success: true
            }, status: :ok
          end
        else
          return render json: {
              msg: 'Profile cannot be updated',
              success: false
          }, status: :unprocessable_entity
        end
      else
        return render json: {
          msg: 'Profile is missing need to create first',
          success: false
       }, status: :unprocessable_entity     
      end
    end
  end
end
