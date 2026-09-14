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

