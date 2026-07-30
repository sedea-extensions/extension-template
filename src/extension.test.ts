import { describe, expect, it, vi } from 'vitest';

vi.mock('vscode', () => ({
  commands: {
    registerCommand: vi.fn(() => ({ dispose: vi.fn() })),
  },
  window: {
    showInformationMessage: vi.fn(),
  },
}));

describe('extension template', () => {
  it('registers the hello command on activate', async () => {
    const vscode = await import('vscode');
    const { activate } = await import('./extension.js');

    const subscriptions: { dispose: () => void }[] = [];
    activate({ subscriptions } as never);

    expect(vscode.commands.registerCommand).toHaveBeenCalledWith(
      'sedeaExtensionTemplate.hello',
      expect.any(Function),
    );
    expect(subscriptions.length).toBe(1);
  });
});
