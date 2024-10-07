class Pages::Blog < ::Phlex::HTML
  include Util::PostLoader

  def view_template
    render ::Pages::Layout.new(:blog) {
      ul {
        posts.each { |post|
          meta = post[:data].front_matter

          return unless meta.key?('published_on')

          li {
            p {
              time(datetime: meta['published_on']) { meta['published_on'] }
              a(href: '/p/' + post[:slug], style: "padding-left: 10px;") { meta['title'] }
            }
          }
        }
      }
    }
  end
end
