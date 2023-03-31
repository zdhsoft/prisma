{
  description = "Prisma Client";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        nodejs = pkgs.nodejs_latest;
      in
      {
        formatter = pkgs.nixpkgs-fmt;

        devShells.default = pkgs.mkShell {
          nativeBuildInputs = [
            nodejs
            nodejs.pkgs.pnpm
            nodejs.pkgs.prettier
            nodejs.pkgs.ts-node
            nodejs.pkgs.typescript
            nodejs.pkgs.typescript-language-server
            nodejs.pkgs.vscode-langservers-extracted
            nodejs.pkgs."@prisma/language-server"
          ];
        };

        packages = { };
      });
}
