activate :directory_indexes
activate :autoprefixer
activate :automatic_image_sizes

set :css_dir,          "assets/stylesheets"
set :js_dir,           "assets/javascripts"
set :images_dir,       "assets/images"
set :fonts_dir,        "assets/fonts"
set :layout,           "layouts/application"
set :relative_links,   true

page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :relative_assets
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end

helpers do
  def external_link_to(body, url, html_options={})
    html_options[:rel] ||= 'external'
    link_to body, url, html_options
  end
end
