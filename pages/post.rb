class Pages::Post < ::Phlex::HTML
  def initialize(post)
    @slug = post[:slug]
    @post = post
  end
  def view_template
    meta = @post[:data].front_matter
    render ::Pages::Layout.new({title: meta['title']}) {
      p {
        h1 { meta['title'] }
        time(datetime: meta['published_on']) { meta['published_on'] }

        render ::Phlex::Markdown.new(@post[:data].content)
      }
    }
  end
end
