import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { InputField } from '../ui/InputField';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm">
      <InputField
        icon={<Mail className="w-5 h-5 text-gray-500" />}
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputField
        icon={<Lock className="w-5 h-5 text-gray-500" />}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
          Forgot password?
        </a>
      </div>
      <Button type="submit">
        Sign in
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}