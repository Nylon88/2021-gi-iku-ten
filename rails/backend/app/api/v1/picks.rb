module V1
  class Picks < Grape::API
    resources :picks do
      desc 'pickボタンクリック時のレスポンス'
      params do
        requires :title, type: String
        requires :abstract, type: String
        requires :writer, type: String
        requires :year, type: String
        requires :publisher, type: String
        requires :citations, type: Integer
        requires :url, type: String
        requires :uid, type: String
      end
      post '/' do
        paper = Paper.find_by(url: params[:url])
        paper = Paper.create(
          title: params[:title],
          abstract: params[:abstract],
          writer: params[:writer],
          year: params[:year],
          publisher: params[:publisher],
          citations: params[:citations],
          url: params[:url]
        ) unless paper.present?
        user = User.find_by(uid: params[:uid])
        pick = paper.picks.present? && user.picks.present?
        count = paper.picks.count
        if pick.present?
          result = count.present? ? [count, "既にこの論文はPickしています"] : [0, "既にこの論文はPickしています"]
          present result
        else
          Pick.create(paper_id: paper.id, user_id: user.id)
          present [count + 1, "正常にPickできました"]
        end
      end

      desc 'ユーザーのPickした論文を取得'
      params do
        requires :uid, type: String
      end
      post '/users' do
        user = User.find_by(uid: params[:uid])
        lists = []
        papers = user.picks
        papers.each do |paper|
          lists << Paper.find(paper.paper_id)
        end
        present lists, with: V1::Entities::PickEntity
      end
    end
  end
end
