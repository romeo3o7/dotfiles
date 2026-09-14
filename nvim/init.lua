vim.g.mapleader = ";"

vim.opt.clipboard = "unnamedplus"
vim.opt.termguicolors = true
vim.opt.virtualedit = "onemore"
vim.opt.number = true
vim.opt.relativenumber = true
-- Indentation Behavior
vim.opt.autoindent = true     -- Matches the indent of the previous line
vim.opt.smartindent = true    -- Auto-indents inside functions, if blocks, etc.

-- Use Real Tabs (Not Spaces)
vim.opt.expandtab = false     -- Keeps tabs as tabs (set to true if you change your mind to spaces)
vim.opt.tabstop = 4           -- A tab counts for 4 spaces visually
vim.opt.shiftwidth = 4        -- Each step of auto-indentation is 4 spaces wide

require("config.plugin")
require("config.pluginSetup")
vim.cmd.colorscheme("catppuccin-mocha")
require("config.keymaps")
require("config.functions")
