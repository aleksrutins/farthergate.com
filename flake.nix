{
  inputs = {
    utils.url = "github:numtide/flake-utils";
    cheetah.url = "github:aleksrutins/cheetah";
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
