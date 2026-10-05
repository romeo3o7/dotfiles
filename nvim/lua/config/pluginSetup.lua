require("mini.files").setup()
require("gitsigns").setup()
require("nvim-treesitter").setup({
ensure_installed = { "c", "lua", "bash" },
  auto_install = true,
})

vim.api.nvim_create_autocmd("FileType", {
    callback = function()
        pcall(vim.treesitter.start)
    end,
})
require("catppuccin").setup({
    flavour = "mocha",
    integrations = {
        treesitter = true,
    },
})

