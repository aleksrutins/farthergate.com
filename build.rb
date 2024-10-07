require "phlex"
require "phlex/markdown"
require "phlexite"
require "front_matter_parser"

require_relative "util/post_loader"
require_relative "pages/layout"
require_relative "pages/home"
require_relative "pages/blog"
require_relative "pages/about"
require_relative "pages/post"

Phlexite::Site.new { |s|
  include Util::PostLoader

  s.mount "assets", on: "/"

  s.page "index.html", Pages::Home.new
  s.page "blog/index.html", Pages::Blog.new
  s.page "about/index.html", Pages::About.new

  posts.each do |post|
    s.page "p/#{post[:slug]}/index.html", Pages::Post.new(post)
  end
}
