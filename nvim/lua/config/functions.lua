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
