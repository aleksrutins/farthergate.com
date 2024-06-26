{
  inputs = {
    utils.url = "github:numtide/flake-utils";
    cheetah.url = "https://flakehub.com/f/aleksrutins/cheetah/0.2.3.tar.gz";
  };

  outputs = { self, utils, cheetah }:
    utils.lib.eachDefaultSystem (system: {
      packages.site = (cheetah.buildSite.${system} ./. {
        name = "site";

        config = {
          always_hydrate = true;
        };
      });
    });
}
