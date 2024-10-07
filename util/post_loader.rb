module Util
  module PostLoader
    def posts = Dir['posts/*.md'].sort.reverse.map { |filename| {slug: File.basename(filename, '.md'), data: FrontMatterParser::Parser.parse_file(filename)} }
  end
end
