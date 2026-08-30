-- ============================================================
-- Leader
-- ============================================================
vim.g.mapleader = ";"

-- ============================================================
-- Plugins — single source of truth, everything lives here
-- ============================================================
-- ============================================================
-- Options
-- ============================================================
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

-- ============================================================
-- Colorscheme
-- ============================================================
vim.pack.add({
    { src = "https://github.com/catppuccin/nvim", name = "catppuccin" },
    { src = "https://github.com/nvim-treesitter/nvim-treesitter", name = "nvim-treesitter" },
    { src = "https://github.com/lewis6991/gitsigns.nvim", name = "gitsigns" },
    { src = "https://github.com/nvim-tree/nvim-web-devicons", name = "nvim-web-devicons" },
	{ src = "https://github.com/echasnovski/mini.files", name = "mini.files" },
})

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

vim.cmd.colorscheme("catppuccin-mocha")
-- ============================================================
-- Clipboard — only explicit yank/cut hits the system clipboard
-- ============================================================
--vim.keymap.set({ "n", "v" }, "y", '"+y')
--vim.keymap.set({ "n", "v" }, "Y", '"+Y')
--vim.keymap.set({ "n", "v" }, "d", '"+d')
--vim.keymap.set({ "n", "v" }, "D", '"+D')
-- ============================================================
-- Core keymaps
-- ============================================================
vim.keymap.set("n", "<leader>e", function() require("mini.files").open() end)
--vim.keymap.set("n", "<leader>e", ":Lexplore %:p:h<CR>")
vim.keymap.set("n", "<leader>w", ":w<CR>")
vim.keymap.set("n", "<leader>q", ":q<CR>")
vim.keymap.set("n", "<leader>cd", ":cd %:p:h<CR>:pwd<CR>")
vim.keymap.set("n", "<leader>rh", ":noh<CR>")
vim.keymap.set('n', '<leader>rs', [[:%s/\s\+$//e<CR>]])
vim.keymap.set('n', '<leader>ri', [[:%s/^\s\+//<CR>]])
vim.keymap.set('n', '<Tab>', '>>')
vim.keymap.set('n', '<S-Tab>', '<<')

-- ============================================================
-- testing
-- ============================================================
vim.keymap.set('n', 'gsw', ':%s/\\<\\>//g', { desc = 'Substitute word under cursor' })
-- vim.keymap.set("n", "w!!" , ":w !sudo tee % > /dev/null")
-- c + backspace to delete a word
vim.keymap.set("i", "<C-BS>", "<C-w>")
vim.keymap.set('n', '<BS>', 'dh')
-- Shift + Right moves to the last letter
vim.keymap.set({'n', 'v'}, '<S-Right>', 'e')
-- Shift + Left moves to the first letter
vim.keymap.set({'n', 'v'}, '<S-Left>', 'b')
vim.keymap.set('n', '<Space>', 'i <Esc>l')

-- Window navigation
vim.keymap.set("n", "<C-Left>", "<C-w>h")
vim.keymap.set("n", "<C-Down>", "<C-w>j")
vim.keymap.set("n", "<C-Up>", "<C-w>k")
vim.keymap.set("n", "<C-Right>", "<C-w>l")

-- move lines
vim.keymap.set("n", "<A-Down>", ":m+<CR>")
vim.keymap.set("n", "<A-Up>", ":m-2<CR>")

-- Fast vertical scroll
vim.keymap.set("n", "<S-Down>", "5j")
vim.keymap.set("n", "<S-Up>", "5k")

-- Terminal escape
vim.keymap.set("t", "<Esc>", [[<C-\><C-n>]])
-- Window resize
--vim.keymap.set("n", "<Up>", ":resize +2<CR>")
--vim.keymap.set("n", "<Down>", ":resize -2<CR>")
--vim.keymap.set("n", "<Left>", ":vertical resize -2<CR>")
--vim.keymap.set("n", "<Right>", ":vertical resize +2<CR>")

-- ============================================================
-- Netrw
-- ============================================================
vim.g.netrw_winsize = 20
vim.g.netrw_liststyle = 3
vim.g.netrw_banner = 0
vim.g.netrw_alto = 1
vim.g.netrw_keepdir = 1
vim.g.netrw_browse_split = 0

-- ============================================================
-- Terminal
-- ============================================================
local term_buf = nil
local term_win = nil

function ToggleTerminal()
  if term_win and vim.api.nvim_win_is_valid(term_win) then
    vim.api.nvim_win_close(term_win, true)
    term_win = nil
  else
    vim.cmd("botright 20split")
    term_win = vim.api.nvim_get_current_win()
    if term_buf and vim.api.nvim_buf_is_valid(term_buf) then
      vim.api.nvim_win_set_buf(term_win, term_buf)
    else
      vim.cmd("terminal")
      term_buf = vim.api.nvim_get_current_buf()
    end
    vim.cmd("startinsert")
  end
end

vim.keymap.set({'n', 't'}, '<C-/>', '<cmd>lua ToggleTerminal()<CR>', {silent = true})

-- ============================================================
-- clang
-- ============================================================

vim.api.nvim_create_autocmd("FileType", {
  pattern = { "c", "cpp" },
  callback = function(ev)
    vim.lsp.start({
      name = "clangd",
      cmd = { "clangd", "--background-index", "--offset-encoding=utf-8" },
      root_dir = vim.fs.root(ev.buf, { ".git", "compile_commands.json" }),
    })
  end,
})


vim.api.nvim_create_autocmd("LspAttach", {
  callback = function(args)
    local opts = { buffer = args.buf }
    vim.keymap.set("n", "gd", vim.lsp.buf.definition, opts)
    vim.keymap.set("n", "gr", vim.lsp.buf.references, opts)
    vim.keymap.set("n", "K", vim.lsp.buf.hover, opts)
    vim.keymap.set("n", "<leader>rn", vim.lsp.buf.rename, opts)
    vim.keymap.set("n", "<leader>ca", vim.lsp.buf.code_action, opts)
    vim.keymap.set("n", "<leader>d", vim.diagnostic.open_float, opts)
    vim.keymap.set("n", "<leader>f", function() vim.lsp.buf.format({ async = true }) end, opts)
  end,
})
